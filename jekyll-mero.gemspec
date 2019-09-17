# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-mero"
  spec.version       = "1.0.0"
  spec.authors       = ["Pedro Pinto"]
  spec.email         = ["pedropinto.web@gmail.com"]

  spec.summary       = "Mero is a Jekyll theme for people who appreciate minimalism and a comfortable reading experience."
  spec.homepage      = "https://github.com/pmpinto/jekyll-mero"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 2.0.2"
  spec.add_development_dependency "rake", "~> 12.0"

  spec.add_development_dependency "jekyll-feed", "~> 0.6"
  spec.add_development_dependency "jekyll-seo-tag", "~> 2.6.1"
  spec.add_development_dependency "jekyll-paginate-v2", "~> 1.5.2"
  spec.add_development_dependency "rouge", "~> 3.9.0"
  spec.add_development_dependency "jekyll-archives", "~> 2.2.1"

end
