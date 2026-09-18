import { BlogPostForm } from '@/components/admin/BlogPostForm';

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Yangi maqola</h1>
      <div className="mt-6">
        <BlogPostForm />
      </div>
    </div>
  );
}
