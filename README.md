# react-software-architecture-course

### About

Completed modules for the course, React: Software Architecture.

### Notes

This course includes:

- Software Architecture Basics - Client-side vs Server-side rendering: - Less strain on server, but generally slow user experience - SSR for faster user experience, but more strain on server - important to consider when requests are far away from server.
- Server-side rendering (SSR)
  - Learned how to load React components from server-side
  - Learned to load styling from server-side
- State Management Architecture
  - State management: how can application handles the data needs of its components with regards to loading, storing, persisting, and sharing this data
  - State management tools and techniques depend on:
    - size and complexity of application
      - "small" state (useState, Context)
        - Context: share state without passing it 
      - "medium" state (Recoil)
      - "large" state (Redux, MobX)
    - number of components that need to share data from server
    - tool-specific weaknesses and strengths
- Data Loading and Websockets
- Code Splitting
- Folder Structure and Naming Conventions

### Credits

[React: Software Architecture, by Shaun Wassell.](https://www.linkedin.com/learning/react-software-architecture/)
