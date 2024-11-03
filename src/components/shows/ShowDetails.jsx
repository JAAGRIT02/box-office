export default function ShowDetails({ status, network, premiered }) {
  return (
    <div>
      <div>
        <p>Status : {status}</p>
        <p>
          Premiered on {premiered} {!!network && `on ${network.name}`}
        </p>
      </div>
    </div>
  );
}
