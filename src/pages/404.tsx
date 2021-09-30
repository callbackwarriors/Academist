import Error from "assets/images/error.gif";
import Layout from "components/utilities/Layout";
import Image from "next/image";

const ErrorPage = () => {
    return (
        <Layout>
            <section className="section-padding bg-gray-100">
                <div className="container text-center">
                <Image 
                    className="object-cover object-center mx-auto"
                    src={Error}
            />
            <h1 className="my-6">404</h1>
            <h4>PAGE NOT FOUND!</h4>
            <p>Looks like you're lost :( We can't find the page you're looking for</p>

                </div>
            </section>
        </Layout>
    )
}

export default ErrorPage
