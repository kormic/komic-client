import Link from "next/link";
import React from "react";

import { SA, SPostPreviewBottomWrapper, SPostTagsWrapper } from "./styled";
import PostHeaderSection from "components/Post/PostHeaderSection";
import { SArticle } from "components/Post/styled";
import { PostDTO, Tag } from "dto/PostDTO";
import { endpoints } from "adapters/endpoints";
import { useCategories } from "context/CategoriesContext";
import { STagSpan } from "components/Tags/styled";

type Props = {
  post: PostDTO;
  showTags?: boolean;
};

const PostTags = ({
  tags,
  categoryId,
}: {
  tags: Tag[];
  categoryId: number;
}) => {
  const { categories } = useCategories();

  const getCategoryById = (id: number) =>
    categories.filter((cat) => cat.id === id)[0].name;

  return tags.length > 0 ? (
    <SPostTagsWrapper>
      {tags.map((tag) => (
        <STagSpan key={tag.id}>#{tag.name}</STagSpan>
      ))}
    </SPostTagsWrapper>
  ) : (
    <STagSpan>#{getCategoryById(categoryId)}</STagSpan>
  );
};

const PostPreview = ({ post, showTags = true }: Props) => {
  return (
    <Link href={`${endpoints.POST.URL}/${post.id}`} passHref>
      <SA>
        <SArticle>
          <PostHeaderSection
            title={post.title}
            shortDescription={post.short_body}
            createdAt={post.createdAt}
          />
          {showTags && (
            <SPostPreviewBottomWrapper>
              <PostTags tags={post.tags} categoryId={post.categoryId} />
            </SPostPreviewBottomWrapper>
          )}
        </SArticle>
      </SA>
    </Link>
  );
};

export default PostPreview;
