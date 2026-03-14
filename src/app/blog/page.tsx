import { Posts } from "@/components/Posts";

export default function Blog() {
  return (
    <div className="mx-auto">
      <Posts
        classNames={[
          "md:col-span-2",
          "md:col-span-1",
          "md:col-span-1",
          "md:col-span-2",
        ]}
      />
    </div>
  );
}
