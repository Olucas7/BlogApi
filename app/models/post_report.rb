class PostReport < Struct.new(:word_count, :word_histogram)
    def self.generate(post)
        PostReport.new (
            #word count
            post.content.split.map {|word| word.gsub(/\w/,'') }.count,
            # word_histogram
            calc_histogram(post)
        )
    end


    def self.calc_histogram(post)
        (post 
            .content
            .split
            .map { |word| word.gsub(/\w/,'') }
            .map(&:downcase)
            .group_by { |word| word}
            .transform_values(&:size)
        )
    end
end