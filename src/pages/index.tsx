import Head from 'next/head'
import Image from 'next/image'
import React from "react";


export default class Home extends React.Component<{}, any> {

    render() {
        return (
            <>
                <Head>
                    <title>The Laundry Bay</title>
                </Head>
                <main className={'container'}>

                    {/*Header section */}
                    <div className={'row justify-content-center my-5'}>
                        <div className='col-md-4'>
                            <ul className={'list-unstyled'}>
                                <li><h2>Excepteur sint occaecat cupidatat non proident</h2></li>
                                <li><p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p></li>
                                <li>
                                    <button type="button" className="btn btn-primary btn-lg">Primary</button>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>

                        </div>
                    </div>

                    {/*How it works section*/}
                    <div className={'row justify-content-center'}>
                        {
                            // for(){}
                        }
                    </div>


                    {/*LaundryBay Encore Package Section*/}
                    <div className={'row justify-content-center'}>
                        {/*<div></div>*/}
                    </div>

                    {/*Footer Section*/}


                </main>
            </>
        );
    }
}
