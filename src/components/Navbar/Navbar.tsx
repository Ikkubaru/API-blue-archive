import { FilterDamage, FilterSchool, NavContainer } from "./Navbar.styled";


export default function Navbar(){
    return(
        <main> 
            <NavContainer>
                <FilterSchool/>
                <FilterDamage/>
            </NavContainer>
        </main>
    )
}