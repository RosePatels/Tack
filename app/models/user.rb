class User < ApplicationRecord
    attr_reader :password

    validates :email, :name, :avatar_url, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    has_many :authored_channels,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'Channel'

    has_many :channel_memberships,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'ChannelMembership'
    
    has_many :channels,
        through: :channel_memberships,
        source: :channel

    has_many :messages,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'Message'

    has_many :authored_dms,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'Dm'

    has_many :dm_memberships,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'DmMembership'

    has_many :dms,
        through: :dm_memberships,
        source: :dm
end