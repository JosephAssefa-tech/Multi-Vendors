import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Breacrumb() {
      const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>

      {paths.map((path, index) => {
        const route = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        return (
          <Breadcrumb.Item 
            key={route}
            active={isLast}
            linkAs={Link}
            linkProps={{ to: route }}
          >
            {path.replace("-", " ")}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
);
}
export default Breacrumb;