import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import Widget from "../../components/widget/Widget";

const MyList = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="products" />
          <Widget type="categories" />
        </div>
        <MyDatatable columns={columns} />
      </div>
    </div>
  );
};

export default MyList;
