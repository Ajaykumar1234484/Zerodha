 import React from'react';
 import{render,screen} from'@testing-library/react';
 import '@testing-library/jest-dom/extend-expert';
 import Hero from "../Landing_page/home/Hero";
import test, { describe } from 'node:test';
 
 describe('Hero Component',()=>{
 test("renders hero image",()=>{
     render(<Hero/>);
     constheroImage=screen.getByAltText("Hero Image");
expect(heroImage).toBeInTheDocument();
 expect(heroImage).toHaveAttribute("src",media/image);

});
 });