import contact from './contact.jpg';

export default function Contact() {
    return(
        <>
            <img src={contact} alt="Contact" className="contact-img" />
             <div>
                <p className="admission-p">CONTACT</p>
                <table class="table table-striped table-primary responsive-font-table">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>
                            S.D. MEMORIAL ACADEMY,  P.O: MERAL & DT:GARHWA , STATE: JHARKHAND 
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Pin Code</th>
                            <td>
                                822133
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>
                                sdmemorialacademymeral@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">School Contact</th>
                            <td>
                                8809385863
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Principal Contact</th>
                            <td>
                                6202879399
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h className="admission-p">Feel Free to Contact Us Anytime!!</h>
            </div>
        </>
    )
}