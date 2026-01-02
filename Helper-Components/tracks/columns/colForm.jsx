export default function ColForm({ children, colTitle }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold underline">{colTitle}</span>
        <h1>{children} </h1>{" "}
      </div>
    </>
  );
}
