# Contributing to CSPR.design

The following is a set of rules and guidelines for contributing to this repo. Please feel free to propose changes to this document in a pull request.

## Submitting issues

If you have questions about how to use CSPR.design, please direct these to our community channels:
* [CSPR Developers Group](https://t.me/CSPRDevelopers) - Ask questions and discuss ideas with the community
* [Storybook Documentation](https://storybook.cspr.design) - Explore component examples and API documentation

### Guidelines
* Please search the existing issues first, it's likely that your issue was already reported or even fixed.
  - Go to the main page of the repository, click "issues" and type any word in the top search/command bar.
  - You can also filter by appending e.g. "state:open" to the search string.
  - More info on [search syntax within GitHub](https://help.github.com/articles/searching-issues)
* Use the appropriate issue template for your submission:
  - 🐞 **Bug report** - For reporting issues with components
  - ✨ **Feature request** - For suggesting new components or features

## Contributing to CSPR.design

All contributions to this repository are considered to be licensed under Apache License 2.0.

### Workflow for bug fixes:
* Check open issues and unmerged pull requests to make sure the topic is not already covered elsewhere
* Fork the repository
* Do your changes on your fork
* Make sure to add or update relevant test cases
* Update Storybook stories if your changes affect component behavior or props
* Test your changes in Storybook to ensure they work as expected
* Create a pull request, with a suitable title and description, referring to the related issue

### Workflow for new components:
* Check existing issues and discussions to ensure the component is needed and aligns with the design system
* Create or update the component following our coding standards
* Add comprehensive Storybook stories demonstrating all component variants and use cases
* Include TypeScript definitions with proper JSDoc comments
* Add unit tests covering component functionality
* Update documentation if necessary
* Create a pull request with detailed description of the new component

### Workflow for documentation improvements:
* Identify areas where documentation can be improved
* Update Storybook stories, README files, or inline code comments
* Ensure examples are accurate and follow current best practices
* Test that all code examples work correctly
* Submit a pull request with clear description of documentation changes

### Code Standards

* **TypeScript**: All components must be written in TypeScript with proper type definitions
* **Styling**: Use styled-components following our theming system
* **Testing**: Include unit tests for all new functionality
* **Storybook**: Every component must have comprehensive Storybook stories
* **Accessibility**: Ensure components meet WCAG accessibility guidelines
* **Performance**: Consider bundle size impact and rendering performance

### Sign your work

We use the Developer Certificate of Origin (DCO) as an additional safeguard for the CSPR.design project. This is a well established and widely used mechanism to assure contributors have confirmed their right to license their contribution under the project's license.

Please read [developer-certificate-of-origin](https://github.com/make-software/cspr-design/blob/main/.github/developer-certificate-of-origin).

If you can certify it, then just add a line to every git commit message:

```
Signed-off-by: Random J Developer <random@developer.example.org>
```

Use your real name (sorry, no pseudonyms or anonymous contributions).

If you set your `user.name` and `user.email` git configs, you can sign your commit automatically with `git commit -s`. You can also use git [aliases](https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases) like `git config --global alias.ci 'commit -s'`. Now you can commit with `git ci` and the commit will be signed.

## Community

We welcome contributions from developers building in the Casper ecosystem! Join our community:

* **[CSPR Developers Group](https://t.me/CSPRDevelopers)** - Main community chat for questions and discussions
* **[GitHub Issues](https://github.com/make-software/cspr-design/issues)** - Bug reports and feature requests
* **[Storybook](https://storybook.cspr.design)** - Component documentation and examples

Thank you for contributing to CSPR.design and helping build a better developer experience for the Casper ecosystem! 🚀

