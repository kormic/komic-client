import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { Editor } from "@tinymce/tinymce-react";
import { EditorEvent } from "public/tinymce/tinymce";

import { useCategories } from "context/CategoriesContext";
import { Spacer } from "components/Spacer";
import {
  SNewPostWrapper,
  SNewPostMetaWrapper,
  SNewPostTitleWrapper,
  SNewPostTitleTextarea,
  SNewPostCategoryWrapper,
  SNewPostCategorylabel,
  SNewPostCategoryCheckbox,
} from "./styled";
import { getUserIdFromToken, TEXTAREA_HEIGHT } from "shared/utils";
import { addPost } from "adapters/posts";
import { AddPostDTO } from "dto/AddPostDTO";

const now = new Date();

export type NewPostRefProps = {
  handleUpload: () => Promise<boolean | undefined>;
};

const NewPost = React.forwardRef<NewPostRefProps, {}>(({}, ref) => {
  const { categories } = useCategories();
  const [post, setPost] = useState<AddPostDTO>({
    user_id: -1,
    title: "",
    short_body: "",
    body: "",
    createdAt:
      now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
    imageUrl: "",
    categoryId: 1,
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [textareaHeight, setTextareaHeight] = useState(TEXTAREA_HEIGHT);

  const adjustTitleTextareaHeight = (height: number) => {
    if (height > textareaHeight) {
      setTextareaHeight(height);
    }
  };

  const savePost = (partialPost: Partial<AddPostDTO>) => {
    setPost((prevPost) => ({ ...prevPost, ...partialPost }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    savePost({ title: e.target.value });
    adjustTitleTextareaHeight(e.target.scrollHeight);
  };

  const handleEditorChange = (
    e: EditorEvent<{
      target: Editor;
    }>
  ) => {
    const editorContent = e.target.getContent();
    const shortBody = e.target.getBody().textContent.slice(0, 90);

    const newPost = {
      ...post,
      body: editorContent,
      short_body: shortBody,
    };

    savePost(newPost);
  };

  useEffect(() => {
    setPost((prevPost) => ({
      ...prevPost,
      user_id: getUserIdFromToken() ?? -1,
    }));
  }, []);

  useEffect(() => {
    setPost((prevPost) => ({ ...prevPost, categoryId: selectedCategory.id }));
  }, [selectedCategory]);

  const handleUpload = useCallback(async () => {
    if (
      !post.user_id ||
      !post.title ||
      !post.body ||
      !post.short_body ||
      !post.categoryId
    ) {
      alert("Required fields are missing");
    } else if (post.title.length < 3) {
      alert("Title is too short. It should be at least 3 characters");
    } else {
      const { success } = await addPost(true, post);

      return success;
    }
  }, [post]);

  useImperativeHandle(
    ref,
    () => ({
      handleUpload,
    }),
    [handleUpload]
  );

  return (
    <SNewPostWrapper>
      <SNewPostMetaWrapper>
        <SNewPostTitleWrapper>
          <label htmlFor='title-input'>Title: </label>
          <SNewPostTitleTextarea
            id='title-input'
            style={{ height: textareaHeight }}
            maxLength={95}
            onBlur={handleInput}
            placeholder='here goes your post title...'
          />
        </SNewPostTitleWrapper>
        <SNewPostCategoryWrapper>
          <span>Category: </span>
          {categories.map((cat) => (
            <React.Fragment key={cat.id}>
              <SNewPostCategorylabel
                htmlFor={cat.name}
                active={selectedCategory.id === cat.id}
              >
                {cat.name}
              </SNewPostCategorylabel>
              <SNewPostCategoryCheckbox
                type='checkbox'
                checked={selectedCategory.id === cat.id}
                id={cat.name}
                value={cat.id}
                onChange={() => {
                  setSelectedCategory(cat);
                }}
              />
            </React.Fragment>
          ))}
        </SNewPostCategoryWrapper>
      </SNewPostMetaWrapper>
      <Spacer space={1} />
      <Editor
        tinymceScriptSrc='/tinymce/tinymce.min.js'
        onChange={(e) => handleEditorChange(e)}
        init={{
          height: "90vh",
          menubar: false,
          plugins: [
            "emoticons",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "emoticons | code | fullscreen | " +
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </SNewPostWrapper>
  );
});

export default NewPost;
