# ComputerCarl - Curriculum Vitae for Full-Stack Developer

```
╔═╗┌─┐┌┬┐┌─┐┬ ┬┌┬┐┌─┐┬─┐  ╔═╗┌─┐┬─┐┬  
║  │ ││││├─┘│ │ │ ├┤ ├┬┘  ║  ├─┤├┬┘│  
╚═╝└─┘┴ ┴┴  └─┘ ┴ └─┘┴└─  ╚═╝┴ ┴┴└─┴─┘
```

Here, you will find the source code for my CV page at [cv.computercarl.com](https://cv.computercarl.com).
The site uses continuous deployment/integration (CD/CI) to deploy to a PaaS using webhooks.
As soon as code is committed to the `master` branch, a multi-stage Docker build is initiated.

As a personal preference, I like to bundle all of the component files (source, Storybook stories, image files, and tests) into a folder for organization and portability.

* Components are written using JSX.
* Components are styled with `styled-components`.
* Created use Gatsby JS (using React JS).
* Contains standard Gatsby progressive images
* Features Gatsby Background Image component.
* Form display and collection is managed by internal CRM service.