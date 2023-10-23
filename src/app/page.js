import Picture from "../app/components/image/Image";
import styles from "./page.module.css";
import Link from "next/link";
import Name from "./components/name/Name";
import { getUser } from "./utils";

export default async function Home() {
  const data = await getUser();
  return (
    <main className={styles.main}>
      <h3 className="mb-4">
        To View The Details Of The User Click On The Profile
      </h3>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 ">
          {data.length > 0 &&
            data.map((item, index) => (
              <div className="col" key={index}>
                <Link
                  href={`./userdetails/${item.login}`}
                  className="card mb-4 border-0"
                >
                  <Picture
                    imgUrl={item.avatar_url}
                    name={item.login}
                    width={220}
                    height={220}
                  />
                  <div className="card-title">
                    <Name
                      style={"text-center"}
                      salutation={"UserName: "}
                      name={item.login}
                    />
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
