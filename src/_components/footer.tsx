import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 lg:text-center">
          <p className="text-sm text-gray-400">
            © 2025 Copyright{" "}
            <span className="font-bold">Reelio</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
