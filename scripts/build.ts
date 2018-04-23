import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import * as glob from 'glob'

interface IOptions {
  env?: {
    trigger?: string
    [name: string]: any
  }
  variant?: {
    [name: string]: any
  }
  argv?: {
    [name: string]: any
  }
}

interface ITestItem {
  title: string
  options: IOptions
  input: string
  output: string
}

/**
 *
 * @param {String} filename The markdown file name.
 */
function parse(filename: string): ITestItem {
  const content = fs.readFileSync(filename).toString()
  const result: ITestItem = {
    title: '',
    options: {},
    input: '',
    output: '',
  }

  content.replace(/^#\s*(.*?)\s*$/m, (all, title) => {
    result.title = title
    return ''
  })
  content.replace(/^##\s*options\s+```yaml\n([^]*?)```/m, (all, text) => {
    let options = yaml.safeLoad(text) as IOptions
    if (options.env) {
      result.options.env = options.env
    }
    if (options.variant) {
      result.options.variant = options.variant
    }
    if (options.argv) {
      result.options.argv = options.argv
    }
    return ''
  })
  content.replace(/^##\s*input\s+```(\w+)\n([^]*?)```/m, (all, type, input) => {
    result.input = input
    return ''
  })
  content.replace(
    /^##\s*output\s+```(\w+)\n([^]*?)```/m,
    (all, type, output) => {
      result.output = output
      return ''
    },
  )
  return result
}

new glob.GlobSync('./src/*.md').found.forEach(filename => {
  fs.writeFileSync(
    filename.replace(/^.\/src\/(.*).md/g, './lib/$1.json'),
    JSON.stringify(parse(filename), null, '  '),
  )
  console.log(filename)
  console.log()
})

// console.log(parse(path.join(__dirname, '../src/trigger1.md')))

// markdown-selector
// querySelector()
// querySelectorAll()

// {
//   title: '',
//   options: {},
//   input: '',
//   output: ''
// }
