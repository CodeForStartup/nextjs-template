import Link from "next/link";
import reactHtmlParser from "react-html-parser";
import PostMeta from "./post-meta";
import { TPostItem } from "app/posts/post-handlers";

export type PostDetailProps = {
  post: TPostItem;
};

export default function PostDetail({ post }: PostDetailProps) {
  const shouldShowEditButton = true;

  return (
    <div className="mb-8">
      <div className="flex">
        <h1 className="flex-1 text-4xl font-extrabold text-slate-700">
          <Link href={`${post.id}`}>{post.title}</Link>
        </h1>
        {shouldShowEditButton && (
          <div className="flex items-center ml-4" title="Edit">
            <Link href={`${post.id}/edit`}>
              <i className="ri-edit-2-line text-xl" />
            </Link>
          </div>
        )}
      </div>

      <PostMeta post={post} />

      <div className="mt-12">{reactHtmlParser(post.content)}</div>
    </div>
  );
}
