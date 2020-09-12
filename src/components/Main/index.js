import React from "react";
import * as Style from './style.module.css';
import {Menu} from '../Menu';

function Main() {
    return (
        <main className={"main"}>
            <div className={"container"}>
                <Menu/>
                <h2 className={Style.h2}>My app</h2>
                <p className={Style.c1}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut corporis cumque error expedita illum ipsam natus nesciunt nihil, non nostrum odio officia porro quae reiciendis repellendus vel vitae voluptates?</span><span>Aliquam amet cum dicta eum ex expedita fugiat, hic id incidunt iste laboriosam maxime necessitatibus nisi, quidem suscipit tempora vel voluptas. Aliquam explicabo ipsum laudantium molestiae quaerat? Nihil, voluptas voluptatem.</span><span>Architecto, libero temporibus. Dolorum fuga hic neque quaerat quam quasi rem saepe voluptates. Accusamus blanditiis, deleniti distinctio esse et facere impedit ipsa ipsum libero nam saepe suscipit tempore veniam. Vitae.</span></p>
            </div>
        </main>
    );
}

export {Main};