# trigger5

## options

```yaml
env:
  mode: develop
```

## input

```html
<!--jdists export="#foo-production"-->
production
<!--/jdists-->
<!--jdists export="#foo-develop"-->
develop
<!--/jdists-->
<!--jdists import="#foo-production" trigger=":mode === 'production'" /-->
<!--jdists import="#foo-develop" trigger=":mode === 'develop'" /-->
```

<!--jdists import="#foo" /-->

## output

```html
develop
```