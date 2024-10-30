# VoIP Management Dashboard
This project is a VoIP Management Dashboard developed to monitor and visualize data for phone extensions and call history. Created as part of a capstone project, the system aims to facilitate VoIP telephony management by using modern tools and design practices to build a dynamic, responsive interface.

## What is VoIP?
VoIP (Voice over Internet Protocol) is a technology that allows telephone calls over the internet by converting voice signals into digital data packets. Widely used in corporate communication systems, VoIP is a more cost-effective and versatile alternative to traditional phone calls and offers additional functionalities, such as recording and integration with digital platforms.

## Technologies Used
### Frontend
- React: JavaScript library for building user interfaces.
- TypeScript: A JavaScript superset that adds static types and enhances code scalability.
- TailwindCSS: Utility-first CSS framework for fast, flexible styling.
- DaisyUI: UI component library for TailwindCSS, providing pre-styled components to improve appearance and user experience.
- Storybook: Development tool for building, documenting, and testing components in isolation.
### Project Structure
The project follows an Atomic Design architecture to organize components:

- Atoms: Basic components, like buttons and text fields.
- Molecules: Simple combinations of atoms, such as extension cards.
- Organisms: Complex components that make up entire sections of the interface, like tables and search forms.

## How to Run the Project
### Prerequisites
- Node.js (>=14) and npm (or yarn) installed on your machine.
### Installation and Execution Steps
1. Clone the repository:

```
git clone https://github.com/your-username/voip-management-dashboard.git
cd voip-management-dashboard
```
2. Install dependencies:

```
npm install
# or
yarn install
```

3. Run the project:

```
npm run dev
# or
yarn dev
```

The project will be available at http://localhost:3000.

### Running Storybook
To view and test components in isolation using Storybook:

```
npm run storybook
# or
yarn storybook
```

Storybook will open at http://localhost:6006.