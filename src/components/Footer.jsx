import React from "react";

const footer = (props) => {
  return (
    <footer className="mb-[5vh] mx-[10vw]">
      <div className="footer-1 px-[2vw] mb-[5vh]  py-[5vh] bg-gray-200 rounded-2xl flex justify-between">
  
        <div className="flex flex-col gap-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              viewBox="0 0 48 48"
              {...props}
            >
              <path
                fill="#4EA0EC"
                d="M41.318 36.567 25.44 4.813c-.312-.688-.625-.813-1-.813-.313 0-.688.125-1.063.75-2.25 3.563-3.25 7.689-3.25 12.002 0 6 3.063 11.627 7.564 20.69.5 1 .875 1.188 1.75 1.188h11.001c.813 0 1.25-.313 1.25-.938 0-.312-.062-.5-.374-1.125ZM18.252 21.565c-1.25-1.875-1.626-2-1.938-2-.313 0-.5.125-1.063 1.25L7.313 36.692c-.25.5-.313.688-.313.938 0 .5.438 1 1.375 1h11.19c.75 0 1.312-.625 1.624-1.813.376-1.5.5-2.813.5-4.375 0-4.376-1.937-8.627-3.437-10.877Z"
                style={{
                  "--darkreader-inline-fill": "#4ea0ec",
                }}
              />
            </svg>
          </div>
          <div>
            <ul className="flex flex-col gap-3 mar-bot">
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#investor-relations">Investor Relations</a>
              </li>
              <li>
                <a href="#atlassian-foundation">Atlassian Foundation</a>
              </li>
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 mar-bot">
          <div>
          
            <h4 className="font-bold text-sm">PRODUCTS</h4>
          </div>
          <div>
            <ul className="flex flex-col gap-3 ">
              <li>
                <a href="#rovo" className="font-normal">Rovo</a>
              </li>
              <li>
                <a href="#jira" className="font-normal">Jira</a>
              </li>
              <li>
                <a href="#jira-align" className="font-normal">Jira Align</a>
              </li>
              <li>
                <a href="#jira-service-management" className="font-normal">Jira Service Management</a>
              </li>
              <li>
                <a href="#confluence" className="font-normal">Confluence</a>
              </li>
              <li>
                <a href="#trello" className="font-normal">Trello</a>
              </li>
              <li>
                <a href="#bitbucket" className="font-normal">Bitbucket</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="">
              See all products <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 mar-bot">
          <div>
            <h4 className="font-bold text-sm">RESOURCES</h4>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#technical-support" className="font-normal">Technical support</a>
              </li>
              <li>
                <a href="#purchasing-licensing" className="font-normal">Purchasing & licensing</a>
              </li>
              <li>
                <a href="#atlassian-community" className="font-normal">Atlassian Community</a>
              </li>
              <li>
                <a href="#knowledge-base" className="font-normal">Knowledge base</a>
              </li>
              <li>
                <a href="#marketplace" className="font-normal">Marketplace</a>
              </li>
              <li>
                <a href="#my-account" className="font-normal">My account</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="">
              Create support ticket <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-bold text-sm">LEARN</h4>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#partners" className="font-normal">Partners</a>
              </li>
              <li>
                <a href="#training-certification" className="font-normal">Training & certification</a>
              </li>
              <li>
                <a href="#documentation" className="font-normal">Documentation</a>
              </li>
              <li>
                <a href="#developer-resources" className="font-normal">Developer resources</a>
              </li>
              <li>
                <a href="#enterprise-services" className="font-normal">Enterprise services</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="">
              See all resources <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-2 flex justify-between px-4">
        <div>
          <h4 >Copyright © 2024 Atlassian</h4>
        </div>
        <div className="f-div flex gap-4">
          <h4>Privacy policy</h4>
          <h4>Terms</h4>
          <h4>Impressum</h4>
          <h4>English</h4>
        </div>
      </div>
    </footer>
  );
};

export default footer;
