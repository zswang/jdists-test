# trigger4

## options

```yaml
env:
  mode: production
```

## input

```html
<!--quoted trigger=":mode === 'develop'">
develop
</quoted-->
<!--quoted trigger=":mode === 'production'">
production
</quoted-->
```

## output

```html
"production"
```