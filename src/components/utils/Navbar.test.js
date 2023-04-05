import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

const renderComponent = () =>   render(<Navbar />);

describe ('renders component', () => {

  describe("Testing links for desktop", () => {

    test("has 3 links", () => {

      renderComponent()

      const links = screen.getAllByRole("link")

      expect(links.length).toBe(3)

    })


    test("Links animation delay by required time", () => {

      renderComponent()

      const links = screen.getAllByRole("link")

      // console.log(links[0])

      // expect(links[0]).toHaveAttribute("data-aos='fade-down'")

    })

    test("has 3 links", () => {

      renderComponent()

      const links = screen.getAllByRole("link")

      expect(links.length).toBe(3)

    })


    test("Has a button", () => {

      renderComponent()

      const button = screen.findAllByRole("button", {
        name: /My Resume/i
      })

      //screen.debug()

      //expect(button).toBeInTheDocument()
    })

  })


});
