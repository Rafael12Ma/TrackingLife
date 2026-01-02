export default function ColForm({ children, colTitle, color }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold underline">{colTitle}</span>
        <h1 className={color}>{children}</h1>{" "}
      </div>
    </>
  );
}
