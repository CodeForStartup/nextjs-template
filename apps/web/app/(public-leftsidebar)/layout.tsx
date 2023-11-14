export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full grid-cols-12 md:gap-8">
      <div className="hide md:col-span-4">
        <div className="rounded-sm bg-white"></div>
      </div>
      <div className="col-span-12 md:col-span-8">{children}</div>
    </div>
  )
}