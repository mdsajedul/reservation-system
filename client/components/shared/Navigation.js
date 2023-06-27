import React from 'react';
import Button from '../buttons/Button';

export default function Navigation() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row py-6 border-b-2">
        <div className="basis-1/6 flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <h1 className="text-xl font-semibold">Tripster</h1>
        </div>
        <div className="basis-1/2">
          <ul className="flex flex-wrap justify-center sm:justify-start font-light">
            <li className="px-5 py-2">Properties</li>
            <li className="px-5 py-2">Attraction</li>
            <li className="px-5 py-2">Popular</li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col sm:flex-row sm:items-center sm:justify-end">
          <div className="px-2 sm:px-5 mb-2 sm:mb-0">
            <Button variant="primary" size="md">
              Sign Up
            </Button>
          </div>
          <div className="px-2 sm:px-5">
            <Button variant="outline-primary" size="md">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
