import "./Header.css";

function Header() {
  return (
    <>
      <div className="container">
        <h1>EmployeeMS</h1>
        <div>
          <input type="Search" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="circle">
          <img src="./Login.jpg"></img>
          <h2>Admin</h2>
        </div>
        
      </div>
    </>
  );
}

export default Header;
