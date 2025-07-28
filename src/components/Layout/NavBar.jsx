import searchIcon from "../../assets/icons/search.svg";
import Avatar from "../../assets/icons/Avatar.png";

function NavBar() {
  return (
    <nav className="bg-white h-[60px] shadow-md">
      <div className="flex flex-row h-full mx-6 items-center justify-center">
        <div className="w-1/2 flex flex-row space-x-4">
          <div className="flex flex-row items-center gap-4 max-w-2xl border-2 py-1 px-4 rounded-full">
            <img src={searchIcon} className="h-4 w-4" alt="search-icon" />
            <input
              type="text"
              placeholder="search"
              className="outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-row space-x-3 items-center justify-end">
          <div className="w-10 h-10 rounded-full bg-slate-600">
            <img src={Avatar} alt="avatar" className="" />
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="font-poppins text-lg font-bold">Imaz</h4>
            <span className="font-poppins text-xs font-light">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
