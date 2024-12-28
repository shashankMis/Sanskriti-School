export default function FeeStructure() {
    return(
        <>
            <div>
            <table class="table table-striped table-primary responsive-font-table">
                    <tbody>
                        <tr>
                            <th scope="row">No</th>
                            <th scope="row" colspan='2'>Particulars</th>
                            <th scope="row">Amount</th>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td colspan='2'>
                            Admission Fee
                            </td>
                            <td>6000.00</td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="3">2</th>
                            <td rowspan="3">Tution Fee</td>
                            <td >LKG to 3</td>
                            <td>
                            700.00 monthly
                            </td>
                        </tr>
                        <tr>
                            <td> 4 to 6 </td>
                            <td>
                                800.00 monthly
                            </td>
                        </tr>
                        <tr>
                            <td>7 to 10</td>
                            <td>
                                900.00 monthly
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Activity Fee(Game,Yoga,Art,etc..)</td>
                            <td>
                                500.00 yearly
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td colspan="2">Annual Fee(Maintanance Fee,Diary,Building Fund,medical,etc..)</td>
                            <td>
                                1500.00 yearly
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>
                                Examination Fee
                            </td>
                            <td>LKG to 5</td>
                            <td>500.00 yearly</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                
                            </td>
                            <td>6 to 10</td>
                            <td>600.00 yearly</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td colspan="2">Lab Fee( 8 to 10)</td>
                            <td>
                                200.00 yearly
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}