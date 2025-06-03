const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-20 py-10 border-b border-gray-300 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
