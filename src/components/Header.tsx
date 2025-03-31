import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

import config, { NavigationLink } from '../config';

import styled from 'styled-components';

const NavContainer = styled.div<{ mobileNavIsOpen: boolean }>`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    transform: ${({ mobileNavIsOpen }) =>
      mobileNavIsOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    height: 100vh;
  }
`;

const NavBar = styled.nav`
  max-width: ${({ theme }) => theme.widths.maxWidth};
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 600;
  font-size: 1rem;
  color: #003366;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;

  // &:hover ul {
  //   display: block;
  // }
`;

const NavItemLink = styled.a`
  color: #003366;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0.5rem 0;
  list-style: none;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  // display: none;
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  white-space: nowrap;

  &:hover {
    background-color: #eaeaea;
  }
`;

const HamburgerIconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 15px;
  height: 50px;
  z-index: 100;
  display: flex;
  align-items: center;
`;

const { navigation } = config;

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  const HamburgerIcon = mobileNavIsOpen ? GiHamburgerMenu : FaTimes;

  const isMobile = true;

  function toggleSubMenu(subNav: NavigationLink[]) {
    if (!subNav) {
      return null;
    }

    return {
      onMouseEnter: () => setIsOpen(true),
      onMouseLeave: () => setIsOpen(false),
    };
  }

  function toggleMobileMenu() {
    setMobileNavIsOpen(!mobileNavIsOpen);
  }

  return (
    <>
      {isMobile && (
        <HamburgerIconContainer>
          <HamburgerIcon size={20} onClick={toggleMobileMenu} />
        </HamburgerIconContainer>
      )}
      <NavContainer mobileNavIsOpen={mobileNavIsOpen}>
        <NavBar>
          <NavList>
            {navigation.map((primary) => {
              const { id, label, link, subNav } = primary;

              return (
                <NavItem key={id}>
                  <NavItemLink href={link} {...toggleSubMenu(subNav)}>
                    {label}
                  </NavItemLink>
                  {subNav && isOpen && (
                    <Dropdown>
                      {subNav.map((secondary) => {
                        const {
                          id: subId,
                          label: subLabel,
                          link: subLink,
                        } = secondary;

                        return (
                          <DropdownItem key={subId}>
                            <NavItemLink href={subLink}>{subLabel}</NavItemLink>
                          </DropdownItem>
                        );
                      })}
                    </Dropdown>
                  )}
                </NavItem>
              );
            })}
          </NavList>
        </NavBar>
      </NavContainer>
    </>
  );
}
