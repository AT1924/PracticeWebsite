
import DropDownButton from "./DropDownButton";

function Header() {
  return (
    <div className="HeaderContainer h-16 w-screen bg-blue">
        
        {/* <div class="absolute top-0 right-0 block w-9/12 h-full">
        <img
        alt="Snowy mountain lake"
        class="object-cover min-w-full h-full"
        src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        />
        </div> */}
        {/* <img className="object-contain h-16 w-16" src="https://previews.123rf.com/images/bloom21/bloom211805/bloom21180500012/101913685-abstract-human-tree-person-with-roots-branches-and-leafs.jpg?fj=1"></img> */}

        <div class="flex flex-col">
            {/* <img className="Logo object-contain h-20 w-20 pl-2" src="tree.png"></img> */}
            <div className="SMContainer flex flex-row gap-6 justify-end items-center" >
                <DropDownButton/>
                <div>02</div>
                <div>03</div>
                <h1>HELLO</h1>
            </div>
        </div>
    

    </div>
  );
}

export default Header;
