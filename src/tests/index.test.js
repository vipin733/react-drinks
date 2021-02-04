
import { render, screen } from "@testing-library/react"
import App from "../../pages"

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />)
    expect(
      screen.getByRole("main", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument()
  })
})