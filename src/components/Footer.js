import Layout from "./Layout"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
        <Layout className="py-8 flex items-center justify-center dark:text-light">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer