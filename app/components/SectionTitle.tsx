type TSectionTitle = {
  title: string;
};

export default function SectionTitle({ title }: TSectionTitle) {
  return (
    <h2 className="text-3xl sm:text-[40px] font-bold text-teal-600 mt-20 sm:mt-28">
      {title}
    </h2>
  );
}
