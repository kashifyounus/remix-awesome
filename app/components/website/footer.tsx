import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BusinessPro</h3>
            <p className="text-sm">
              Professional business consulting services for your success.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#consulting">Strategic Consulting</Link></li>
              <li><Link to="#marketing">Digital Marketing</Link></li>
              <li><Link to="#analytics">Analytics & Insights</Link></li>
              <li><Link to="#brand">Brand Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#about">About Us</Link></li>
              <li><Link to="#team">Our Team</Link></li>
              <li><Link to="#careers">Careers</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <address className="text-sm not-italic">
              <p>123 Business Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Email: contact@businesspro.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} BusinessPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
