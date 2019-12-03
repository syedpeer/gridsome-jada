---
title: A simple Markdown example
path: /a-simple-markdown-example
date: 2019-12-01
updated: 2019-12-01
author: [jada]
tags: ['gist']
---

Jada uses [Remarkability](https://mflash.dev/remarkability/) to style markdown content. Remarkability is an opinionated baseline CSS for Markdown-generated HTML, based on [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms) and [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus) with some modifications.

### Table of Contents

### Example

The content you're reading is styled using `remarkability` with a [recommended](https://github.com/Microflash/remarkability/tree/master/src/_variables.scss) configuration.

You can have a paragraph with *emphasized* or **important** text, [links](#), `code snippets`, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <kbd>keyboard inputs</kbd>, <s>strikethrough</s>, ~~deleted~~ or <ins>inserted</ins> elements, <samp>sample text</samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup> text.

You can have a horizontal rule.

---

You can have **unordered lists** with multiple levels of nesting:
- A simple list
  - with nested items
    - with different bullet point
      - as it goes
        - deeper and deeper
          - till six levels
- with items that can sprawl over multiple lines
- like this long paragraph on the list: This should be interesting. Damage report! The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. The Federation's gone; the Borg is everywhere!

And **ordered lists**:
<ol>
  <li>Don't pick up the phone
    <ol>
      <li>Pay attention to your dinner
        <ol>
          <li>And your company
            <ol>
              <li>Have some conversation
                <ol>
                  <li>In real world
                    <ol>
                      <li>And enjoy the moment.</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Take some time off</li>
  <li>And do take naps on time.</li>
</ol>

And even **definition lists**:
<dl>
  <dt>Name</dt>
  <dd>Theresia</dd>
  <dt>Codename</dt>
  <dd>Bumblebee of Bohemia</dd>
  <dt>Organization</dt>
  <dd>Zeroland</dd>
  <dt>Location</dt>
  <dd>Somewhere in Amazon forests</dd>
</dl>

> You can also put some quotes in a `blockquote`.
>
> It can span multiple paragraphs.
> > Multiple `blockquote`s 
> > > can be nested as well.
>
> You can add lists
> 
> - like
> - this
> 
> with some footer text at the end.

**Tables** are supported with styles for cells, rows, head, body, and foot.

| Song                        | Published |           Artist |
| --------------------------- | :-------: | ---------------: |
| Lovely Day                  |   1977    |     Bill Withers |
| Rolling in the Deep         |   2011    |            Adele |
| Unique                      |   2014    |            Lenka |
| Every Time the Sun Comes Up |   2014    | Sharon Van Etten |

**Code Blocks** are displayed in a `pre` element.

```java
import java.math.BigDecimal;
import java.util.Optional;
import java.util.stream.LongStream;

public class Factorial {

  public static Optional<BigDecimal> getFactorial(final int num) {
    return LongStream.rangeClosed(2, num).parallel().mapToObj(BigDecimal::new)
        .reduce(BigDecimal::multiply);
  }
}
```

You can also use **details** with *summary*.

<details>
  <summary>Copyright &copy; 2019 - &infin;</summary>
  <p>&mdash; by Jada. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of Jada.</p>
</details>
