import { Brain } from 'lucide-react';

  
export default function Process() {
    return (
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              How we publish our think
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <Brain className="h-8 w-8 text-indigo-600" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">How We Do What We Do</h3>
                  <p className="mt-2 text-gray-600">Our process is the best.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
