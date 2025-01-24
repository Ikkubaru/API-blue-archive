import { FilterDamage, FilterSchool, NavContainer } from "./Navbar.styled";


export default function Navbar(){
    return(
        <main> 
            <div className="my-8">
            <NavContainer>
                <FilterSchool/>
                <FilterDamage/>
            </NavContainer>
            </div>
        </main>
    )
}