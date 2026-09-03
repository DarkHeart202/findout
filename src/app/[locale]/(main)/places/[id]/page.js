async function page({ params }) {
  const { id } = await params;
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">تفاصيل المكان رقم: {id}</h1>
    </div>
  );
}

export default page;
