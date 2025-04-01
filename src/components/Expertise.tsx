import { Bot, Brain, Cpu, Database, LineChart, Shield } from 'lucide-react';


const expertises = [
    {
        icon: Database,
        title: 'Data Engineering',
        description: 'It all begins with data.'
    },
    {
        icon: LineChart,
        title: 'Analytics',
        description: 'Then you gotta analyse it.'
    },
    {
        icon: Brain,
        title: 'AI',
        description: 'It\'s what we do.'
    },
    {
        icon: Shield,
        title: 'Governance',
        description: 'It needs to be legal and ethical.'
    },
    {
        icon: Cpu,
        title: 'Integration',
        description: 'It has to work with what you got.'
    },
    {
        icon: Bot,
        title: 'Solutions',
        description: 'We bring it all together.'
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Expertise</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We think therefore we are experts
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {expertises.map((expertise, index) => (
                        <div
                            key={index}
                            className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                            <div className="relative bg-white p-6 rounded-xl">
                                <expertise.icon className="h-8 w-8 text-indigo-600" />
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{expertise.title}</h3>
                                <p className="mt-2 text-gray-600">{expertise.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}