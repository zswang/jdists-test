# trigger6

## options

```yaml
env:
  mode: production
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

## output

```html
production
```