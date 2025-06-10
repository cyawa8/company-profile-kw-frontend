export default function Page({children}) {
  return (
   <div className="bg-primary-0 px-6 py-8 border-r border-grey-100 row-span-full flex flex-col gap-8">
    <h1>{children}</h1>
   </div>
  );
}