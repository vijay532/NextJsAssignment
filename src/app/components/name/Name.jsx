export default function Name({ salutation = "", name = "", style = "" }) {
  return (
    <p className={`${style} mb-4`}>
      {salutation}
      <strong>{name}</strong>
    </p>
  );
}
