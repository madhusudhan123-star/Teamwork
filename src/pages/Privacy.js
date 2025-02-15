import React from 'react'

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white py-20 px-4 md:px-8 lg:px-16">
            <div className="">
                <h1 className="text-4xl font-bold mb-8">Terms & Privacy Policy</h1>
                <h2 className="text-2xl font-semibold mb-6">We are committed to protecting your privacy</h2>

                <p className="mb-8">
                    We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service.
                    This policy indicates the type of processes that may result in data being collected about you.
                    Your use of this website gives us the right to collect that information.
                </p>

                <div className="space-y-8">
                    {/* Information Collected Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Information Collected</h3>
                        <p>
                            We may collect any or all of the information that you give us depending on the type of transaction you enter into,
                            including your name, address, telephone number, and email address, together with data about your use of the website.
                            Other information that may be needed from time to time to process a request may also be collected as indicated on the website.
                        </p>
                    </section>

                    {/* Information Use Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Information Use</h3>
                        <p>
                            We use the information collected primarily to process the task for which you visited the website.
                            Data collected in the UK is held in accordance with the Data Protection Act.
                            All reasonable precautions are taken to prevent unauthorised access to this information.
                            This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details.
                        </p>
                    </section>

                    {/* Cookies Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Cookies</h3>
                        <p>
                            Your Internet browser has the in-built facility for storing small files – "cookies" – that hold information which allows a website to recognise your account.
                            Our website takes advantage of this facility to enhance your experience.
                            You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.
                        </p>
                    </section>

                    {/* Disclosing Information Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Disclosing Information</h3>
                        <p className="mb-4">
                            We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms.
                            We may also use the information to keep in contact with you and inform you of developments associated with us.
                            You will be given the opportunity to remove yourself from any mailing list or similar device.
                        </p>
                        <p className="mb-4">
                            If at any time in the future we should wish to disclose information collected on this website to any third party,
                            it would only be with your knowledge and consent.
                        </p>
                        <p>
                            We may from time to time provide information of a general nature to third parties – for example,
                            the number of individuals visiting our website or completing a registration form,
                            but we will not use any information that could identify those individuals.
                        </p>
                    </section>

                    {/* Changes to Policy Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Changes to this Policy</h3>
                        <p>
                            Any changes to our Privacy Policy will be placed here and will supersede this version of our policy.
                            We will take reasonable steps to draw your attention to any changes in our policy.
                            However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.
                        </p>
                    </section>

                    {/* Contacting Us Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Contacting Us</h3>
                        <p>
                            If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you,
                            please email us at it@schbang.com. You can also correct any factual errors in that information or require us to remove your details form any list under our control.
                        </p>
                    </section>

                    {/* Third Party Processors Section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-3">Third Party Processors</h3>
                        <p className="mb-4">
                            Our carefully selected partners and service providers may process personal information about you on our behalf as described below:
                        </p>
                        <h4 className="font-semibold mb-2">Digital Marketing Service Providers</h4>
                        <p>
                            We periodically appoint digital marketing agents to conduct marketing activity on our behalf,
                            such activity may result in the compliant processing of personal information. Our appointed data processors include:
                        </p>
                        <p className="mt-4">
                            Prospect Global Ltd (trading as Sopro) Reg. UK Co. 09648733. You can contact Sopro and view their privacy policy here:
                            <a href="http://sopro.io" className="text-blue-600 hover:text-blue-800 ml-1">http://sopro.io</a>.
                            Sopro are registered with the ICO Reg: ZA346877 their Data Protection Officer can be emailed at:
                            <a href="mailto:dpo@sopro.io" className="text-blue-600 hover:text-blue-800 ml-1">dpo@sopro.io</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Privacy