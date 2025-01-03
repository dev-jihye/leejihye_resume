type TSectionTitle = {
  title: string;
};

export default function SectionTitle({ title }: TSectionTitle) {
  return (
    <h2 className="mt-20 sm:mt-32 flex items-center text-xl sm:text-2xl font-bold text-teal-600">
      {title}
    </h2>
  );
}
