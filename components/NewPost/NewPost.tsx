import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { Editor } from "@tinymce/tinymce-react";
// TODO: Check Investigate on this a bit. Check further down
// above the handleEditorChange function
// import { EditorEvent } from "public/tinymce/tinymce";

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
  SDescriptionTextarea,
} from "./styled";
import { addPost } from "adapters/posts";
import { AddPostDTO } from "dto/AddPostDTO";
import { getUserIdFromToken, TEXTAREA_HEIGHT } from "shared/utils";

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
  const [descriptionTextareaHeight, setDescriptionTextareaHeight] =
    useState(TEXTAREA_HEIGHT);

  const adjustTextareaHeight = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    textAreaHeight: number,
    callBack: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (e.target.scrollHeight > textAreaHeight) {
      callBack(e.target.scrollHeight);
    }
  };

  const updatePostDTO = (
    key: keyof AddPostDTO,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const partialPost: Partial<AddPostDTO> = { [key]: e.target.value };
    setPost((prevPost) => ({ ...prevPost, ...partialPost }));
  };

  const savePost = (postDto: AddPostDTO) => {
    setPost((prevPost) => ({ ...prevPost, ...postDto }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updatePostDTO("title", e);
    adjustTextareaHeight(e, textareaHeight, setTextareaHeight);
  };

  const handleDescriptionInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updatePostDTO("short_body", e);
    adjustTextareaHeight(
      e,
      descriptionTextareaHeight,
      setDescriptionTextareaHeight
    );
  };

  // TODO: The type of the event here was
  // EditorEvent<{
  //  target: Editor;
  // }>
  // but the import is failing in vercel.
  // I will try with any to see if it builds
  // successfully on vercel and then will investigate on this.
  const handleEditorChange = (e: any) => {
    const editorContent = e.target.getContent();

    const newPost = {
      ...post,
      body: editorContent,
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
      const { success, props } = await addPost(true, post);

      if (props?.errorMessage) {
        alert(props?.errorMessage);
      } else {
        return success;
      }
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
          <SNewPostTitleTextarea
            id='title-input'
            style={{ height: textareaHeight }}
            maxLength={95}
            onBlur={handleInput}
            placeholder='here goes your post title...'
          />
          <SDescriptionTextarea
            id='description-input'
            style={{ height: descriptionTextareaHeight }}
            onBlur={handleDescriptionInput}
            maxLength={200}
            placeholder='here goes your post description...'
          />
        </SNewPostTitleWrapper>
        <SNewPostCategoryWrapper>
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
