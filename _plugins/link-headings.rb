class Jekyll::MarkdownHeader < Jekyll::Converters::Markdown
    def convert(content)
        super.gsub(/<h(\d) id="(.*?)">(.*?)<\/h(\d)>/, '<h\1 id="\2"><a href="#\2">\3</a></h\1>')
    end
end
