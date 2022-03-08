import { DefaultLayout } from "../../components/layouts/defaultLayout";
import { api } from "../../utils/api";
import { Fragment, useState, useEffect } from "react";
import {} from "react/cjs/react.development";

export function Home() {
  const [assets, setAssets] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    async function getApi() {
      const response = await api.get("assets/", { limit: 10, offset: offset });
      setAssets(response.data.data);
    }
    getApi();
  }, []);
  function renderFarm() {
    return assets.map((item) => {
      return (
        <Fragment>
          <li key={item.id}>
            {item.name}
          </li><br />
        </Fragment>
      );
    });
  }
  return (
    <DefaultLayout>
      <ul>{renderFarm()}</ul>
    </DefaultLayout>
  );
}
